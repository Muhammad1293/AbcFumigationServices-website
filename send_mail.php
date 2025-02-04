<?php
// Include Composer's autoload file
require 'vendor/autoload.php';

// Create a new PHPMailer instance
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    // Set PHPMailer to use SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';  // Gmail SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'danishkhanghunio456@gmail.com';  // Your Gmail address
    $mail->Password = 'vfadrjiapeqtzynl';  // Your Gmail password (or App-specific password if 2FA enabled)
    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;  // Use port 465 for SSL or 587 for TLS

    // Get form data
    $name = filter_var(trim($_POST["name"] ?? ""), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $phone = filter_var(trim($_POST["phone"] ?? ""), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $services = filter_var(trim($_POST["services"] ?? ""), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $message = nl2br(filter_var(trim($_POST["message"] ?? ""), FILTER_SANITIZE_FULL_SPECIAL_CHARS)); // Convert new lines to <br>

    // Check if required fields are filled
    if (empty($name) || empty($email) || empty($phone) || empty($services) || empty($message)) {
        echo json_encode(["success" => false, "message" => "All fields are required."]);
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Invalid email address."]);
        exit;
    }

    // Set the sender's email and name based on the form data
    $mail->setFrom($email, $name);  // Sender's email and name as per the form

    // Add the recipient's email address (where you want to receive the messages)
    $mail->addAddress('danishkhanghunio456@gmail.com');  // Replace with the email address where you want to receive messages

    // Set email format to HTML
    $mail->isHTML(true); 

    // Set email subject and body
    $mail->Subject = "New Contact Form Submission";
    $body = "
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Service Requested:</strong> $services</p>
        <p><strong>Message:</strong></p>
        <p>$message</p>
    ";

    // Set email content
    $mail->Body = $body;
    $mail->AltBody = strip_tags($body);  // For non-HTML email clients

    // Send the email
    if ($mail->send()) {
        echo json_encode(["success" => true, "message" => "Your message has been sent successfully!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send email. Please try again later."]);
    }

} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Error: " . $mail->ErrorInfo]);
}

?>
