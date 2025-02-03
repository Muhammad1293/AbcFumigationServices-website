<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_var($_POST["name"], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST["phone"], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $services = filter_var($_POST["services"], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    $to = "muhammad.danish1015@gmail.com"; // 🔹 Replace with your email
    $subject = "New Contact Form Submission";
    
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Service Requested: $services\n\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n"; // 🔹 Ensures responses go to sender
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true, "message" => "Your message has been sent successfully!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Something went wrong. Try again!"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid Request"]);
}
?>
