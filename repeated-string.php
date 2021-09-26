<?php
//When you get time-outs, you are probably trying to construct the 'infinite' string based on the amount of chars you need. 
//Don't do this, but instead count the number of 'a's in the original string and then multiply this till you get to the target. 
//The remaining part of a string can be calculated then.

//$s = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm';
//$n = 736778906400;

$s = 'aba';
$n = 10;

function repeatedString($s, $n) {

    if (strlen($s) >= 1 && strlen($s) <= 100 && $n >= 1 && $n <= 1000000000000) {
        $c = substr_count($s,'a');
        $m = strlen($s);

        $f = intval($n/$m); //full

        echo $f . "\n";

        $answer = $f * $c;

        echo $answer . "\n";
        echo $n % $m . "\n";
        if ($n % $m)
        {
            $s = substr($s,0, $n % $m);
            $answer += substr_count($s,'a');
        }

        return $answer;
    }
}

$result = repeatedString($s, $n);
echo $result . "\n";