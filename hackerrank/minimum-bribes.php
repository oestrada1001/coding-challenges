<?php

//$q = [2, 1, 5, 3, 4];

//$q = [2, 5, 1, 3, 4];

$q = [1,2,5,3,7,8,6,4];

function minimumBribes($q) {
    // Write your code here
    
    $arLength = count($q);
    $jumps = 0;
    $chaotic = false;

    if ($arLength >= 1 && $arLength <= 10) {
        for($i = 0; $i < $arLength; $i++) {

            // 5 - (2 + 1) > 2
            if ($q[$i] - ($i + 1) > 2) {
                $chaotic = true;
            }

            // 5 - 2; 3 < 2 
            for ($j = $q[$i] - 2; $j < $i; $j++) {
                if ($q[$j] > $q[$i]) {
                    $jumps += 1;   
                }
            }
        }

        if (!$chaotic) {
            echo $jumps . "\n";
        } else {
            echo "Too chaotic \n";
        }
    }

}

minimumBribes($q);