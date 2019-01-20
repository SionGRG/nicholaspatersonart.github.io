<?php
	
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$visitor_subject = $_POST['subject'];
	$message = $_POST['message'];

	$email_from = 'SionGREG75@outlook.com';
	
	$email_subject = "New Form Submission";

	$email_body = "User Name: $name.\n".
					"User Email: $visitor_email'\n".
						"User Subject: $visitor_subject.\n".
							"User Message: $message.\n";

	$to = "SionGregory35@gmail.com";

	$headers = "From: $email_from \r\n";

	$headers .= "Replay-To: $visitor_email \r\n";

	mail($to,$email_subject,$email_body,$headers);

	header("Location: contact.html");

?>
