<?php

if (isset($_GET['section'])) {
    switch ($_GET['section']) {
        case 'myCV':
            include("controller/myCVController.php");
            break;

        case 'projects':
            include("controller/projectsController.php");
            break;

        default:
            include("controller/404Controller.php");
            break;
    }
} else {
    include("controller/myCVController.php");
}
