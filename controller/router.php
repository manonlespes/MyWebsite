<?php

if (isset($_GET['section'])) {
    switch ($_GET['section']) {
        case 'myCV':
            include("controller/myCVController.php");
            break;

        case 'homeSafe':
            include("controller/homeSafeController.php");
            break;

        default:
            include("controller/404Controller.php");
            break;
    }
} else {
    include("controller/myCVController.php");
}
