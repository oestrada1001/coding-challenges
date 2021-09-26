<?php

function minimumSwaps($arr) {
    // Goal is to have the Value + 1 == Index
    
    // Define move forward.
    // Value + 1 !== Index
    
    // Splice add to the correct Index
    // Move P.Value to correct Index
    
    // P.Value == Index + 1 => Check next number
    
    $arLength = count($arr);
    $queue = null;
    $swaps = 0;
    
    // [2,3,4,1,5]
    //// [3,2,4,1,5]
    //// [4,2,3,1,5]
    //// [1,2,3,4,5]
    // [4,3,2,1,5]
    // [1,3,2,4,5]
    // [1,2,3,4,5]
    if ($arLength >= 1 && $arLength >= 100000) {
        $list = [];
        foreach($arr as $i => $v) {
            $list[$i+1] = $v;
        }
    
        $i = 1;
        while ($i < $arLength) {
            if ($list[$i] > 1 and $list[$i] < $arLength) {
                if($list[$i] != $i) {
                    $queue = $list[$list[$i]];
        
                    $list[$list[$i]] = $list[$i];
        
                    $list[$i] = $queue;
                    $swaps += 1;
                } else {
                    $i += 1;
                }
            }
        }
        return $swaps;   
    }
}

$arr = [2,3,4,1,5];
$result = minimumSwaps($arr);

echo "Swaps: $result \n";