//Triangle
//romanbond
var run = function() {
var inputBox = document.getElementById('scores');
-	var inputStr = inputBox.value;
	var base=1;
        var i = 2
        for(x=1; x<n; x++){
                base = base + i;
                i++;
        }
        return base;
};

var button = document.getElementById('runner');
button.onclick = run;
