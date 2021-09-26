<?php

$c = [0,0,1,0,0,1,0];

function jumpingOnClouds($c) 
{
    $clearLength = count($c) - 1;
    // Keep track of current cloud
    $player = [
        'current' => 0,
        'jumps' => 0
    ];

    foreach($c as $cloudIndex => $cloudState) {
        
        // End jumps if currently cloud == c.length
        if ($player['current'] <= $clearLength) {

            // Check if two jumps is >= c.length
            $twoJumpIndex = $player['current'] + 2;
            $oneJumpIndex = $player['current'] + 1;
            // Check if two jumps is safe else default to one and keep track of jump.
            if ($twoJumpIndex <= $clearLength && $c[$twoJumpIndex] == 0) {
                $player['current'] = $twoJumpIndex;
                $player['jumps'] += 1;
            } else if ($oneJumpIndex <= $clearLength){
                $player['current'] = $oneJumpIndex; 
                $player['jumps'] += 1;
            }
        }
    }
    return $player['jumps'];
}

$jumps = jumpingOnClouds($c);

echo "Jumps: $jumps \n";