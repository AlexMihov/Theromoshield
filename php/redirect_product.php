<?php
	$country = $_POST["country"];
//	echo $_SERVER[HTTP_REFERER];
    $serverInfos = explode('/',$_SERVER[HTTP_REFERER]);
    $target = end($serverInfos);
    echo $target;

switch ($country) {
    case "de_DE":
        header("Location: ../de/produkte/".$target);exit;
        break;
    case "en_GB":
        header("Location: ../en/produkte/".$target);exit;
        break;
    case "tr_TR":
        header("Location: ../tr/produkte/".$target);exit;
        break;
}
?>