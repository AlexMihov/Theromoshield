<?php
    ob_start();
	$country = $_POST["country"];
//	echo $_SERVER[HTTP_REFERER];
    $serverInfos = explode('/',$_SERVER[HTTP_REFERER]);
    $target = end($serverInfos);
    //echo $target;

switch ($country) {
    case "de":
        header("Location: ../de/".$target);exit;
        break;
    case "en":
        header("Location: ../en/".$target);exit;
        break;
    case "tr":
        header("Location: ../tr/".$target);exit;
        break;
}
    ob_flush();

?>