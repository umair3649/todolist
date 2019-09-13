<?php
  
if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') 
    $link = "https"; 
else
    $link = "http"; 
  
// Here append the common URL characters. 
$link .= "://"; 
  
// Append the host(domain name, ip) to the URL. 
$link .= $_SERVER['HTTP_HOST']; 
$link .= $_SERVER['REQUEST_URI']; 
header('Content-Type: application/json');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods:  ACL, COPY, GET, PROPPATCH, PATCH, DELETE, POST, UPDATE, VERSION-CONTROL");
  header("Access-Control-Allow-Headers: Overwrite, Destination, Content-Type, Depth, User-Agent, Translate, Range, Content-Range, Timeout, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control, Location, Lock-Token, If");
  header("Access-Control-Expose-Headers: DAV, content-length, Allow");

include ('new_config.php');
$actual_link = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$page_directory = dirname($actual_link);

if($_REQUEST['type']=='total')
    {
		if (isset($_REQUEST['id']))
		{

			$userId = $_REQUEST['id'];
		
		
			$fetchCircles = mysqli_query($dbconnect,"SELECT count(*) AS count FROM `todotable` WHERE `userId`='$userId'");			
			
			
			while ($row = mysqli_fetch_assoc($fetchCircles)) {
				$aparr[] = $row;
			
			}
		
							
		
			echo json_encode($aparr);
			}
			else
			{
				$response["error"] = "Required field is missing";
	
				// echoing JSON response
				echo json_encode($response);
			}
			// $ans[] = $dd;
			// $response["error"]=null;
			// $response1=$profileData;
			// $response1["recording"]=$recarray;
			
		
	
        
	}
	elseif($_REQUEST['type']=='pending')
    {
		if (isset($_REQUEST['id']))
		{

			$userId = $_REQUEST['id'];
		
		
			$fetchCircles = mysqli_query($dbconnect,"SELECT count(*) AS ids FROM `todotable` WHERE `userId`='$userId' AND `status`='pending'");			
			
			
			while ($row = mysqli_fetch_assoc($fetchCircles)) {
				$aparr[] = $row;
			
			}
		
							
		
			echo json_encode($aparr);
			}
			else
			{
				$response["error"] = "Required field is missing";
	
				// echoing JSON response
				echo json_encode($response);
			}
			// $ans[] = $dd;
			// $response["error"]=null;
			// $response1=$profileData;
			// $response1["recording"]=$recarray;
			
		
	
        
	}
	elseif($_REQUEST['type']=='completed')
    {
		if (isset($_REQUEST['id']))
		{

			$userId = $_REQUEST['id'];
		
		
			$fetchCircles = mysqli_query($dbconnect,"SELECT count(*) AS complete FROM `todotable` WHERE `userId`='$userId' AND `status`='completed'");			
			
			
			while ($row = mysqli_fetch_assoc($fetchCircles)) {
				$aparr[] = $row;
			
			}
		
							
		
			echo json_encode($aparr);
			}
			else
			{
				$response["error"] = "Required field is missing";
	
				// echoing JSON response
				echo json_encode($response);
			}
			// $ans[] = $dd;
			// $response["error"]=null;
			// $response1=$profileData;
			// $response1["recording"]=$recarray;
			
		
	
        
	}
	elseif($_REQUEST['type']=='todays')
    {
		if (isset($_REQUEST['id']))
		{

			$userId = $_REQUEST['id'];
		
			$date=date('Y-m-d');
			$fetchCircles = mysqli_query($dbconnect,"SELECT count(*) AS today FROM `todotable` WHERE `userId`='$userId' AND `createdAt`='$date'");			
			
			
			while ($row = mysqli_fetch_assoc($fetchCircles)) {
				$aparr[] = $row;
			
			}
		
							
		
			echo json_encode($aparr);
			}
			else
			{
				$response["error"] = "Required field is missing";
	
				// echoing JSON response
				echo json_encode($response);
			}
			// $ans[] = $dd;
			// $response["error"]=null;
			// $response1=$profileData;
			// $response1["recording"]=$recarray;
			
		
	
        
	}
	elseif($_REQUEST['type']=='addTask')
    {
		if ((isset($_REQUEST['id']))&&(isset($_REQUEST['taskDetail']))&&(isset($_REQUEST['taskDate'])))
		{

			$userId = $_REQUEST['id'];
			$taskDetail = $_REQUEST['taskDetail'];
			$taskDate = $_REQUEST['taskDate'];
		
			$fetchCircles = mysqli_query($dbconnect,"INSERT INTO `todotable`(`data`, `userId`, `status`, `createdAt`) VALUES ('$taskDetail','$userId','new','$taskDate')");			
			header("Location:http://localhost:8000"); 
			//echo json_encode("INSERT INTO `todotable`(`data`, `userId`, `status`, `createdAt`) VALUES ('$taskDetail','$userId','new','$taskDate')");

			// $ans[] = $dd;
			// $response["error"]=null;
			// $response1=$profileData;
			// $response1["recording"]=$recarray;
			
		
		
	
        
	}
	}
	elseif($_REQUEST['type']=='alldata')
    {
		if (isset($_REQUEST['id']))
		{

			$userId = $_REQUEST['id'];
		
		
			$fetchCircles = mysqli_query($dbconnect,"SELECT * FROM `todotable` WHERE `userId`='$userId'");			
			
			
			while ($row = mysqli_fetch_assoc($fetchCircles)) {
				$aparr[] = $row;
			
			}
		
							
		
			echo json_encode($aparr);
			}
			else
			{
				$response["error"] = "Required field is missing";
	
				// echoing JSON response
				echo json_encode($response);
			}
			// $ans[] = $dd;
			// $response["error"]=null;
			// $response1=$profileData;
			// $response1["recording"]=$recarray;
			
		
	
        
	}

	
	

	
    


?>
