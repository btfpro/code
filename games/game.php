<?php



if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip1 = $_SERVER['HTTP_CLIENT_IP'];
} 

if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip2 = $_SERVER['HTTP_X_FORWARDED_FOR'];
} 

$ip3 = $_SERVER['REMOTE_ADDR'];


// Logging class initialization
/*
$log = new Logging();
 
// set path and name of log file (optional)
$log->lfile('mylog.txt');
 
// write message to the log file
$log->lwrite($ip1);
$log->lwrite($ip2);
$log->lwrite($ip3);
 
// close log file
$log->lclose();

*/

$file = 'mylog.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current .= "\n\n1)".$ip1."\n2)".$ip2."\n3)".$ip3;
// Write the contents back to the file
file_put_contents($file, $current);




?>

