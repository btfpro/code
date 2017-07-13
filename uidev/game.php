<?php



if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip2 = $_SERVER['HTTP_CLIENT_IP'];
} 

if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip3 = $_SERVER['HTTP_X_FORWARDED_FOR'];
} 

$ip1 = $_SERVER['REMOTE_ADDR'];

if (!empty($_POST['info'])) {
	$info = $_POST['info'];
}


$file = 'mylog.txt';
// Open the file to get existing content
$current = file_get_contents($file);

date_default_timezone_set("America/New_York");

$time = date("Y-m-d h:i:sa");
// Append a new person to the file
$current .= "\n\nEST(Y-m-d): ".$time." 1)".$ip1."\t2)".$ip2."\t3)".$ip3."\n".$info;
// Write the contents back to the file
file_put_contents($file, $current);




?>

