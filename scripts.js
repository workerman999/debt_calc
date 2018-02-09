    var cash;
	var day;
		
	function outputCash(vol) {
	    cash = vol.value;

		  document.querySelector('#out1').value = cash;
		  getDate();
		  getCredit(cash, day);
    
		  return cash;
    }

    function getDate() {
		var Year;
	    var Month;
	    var Days;
	    var upDate;
	    var fMonth;
		var setDate;
	
        if (isNaN(day)) {
        day = 5;
     }else{
        day = day;
     }
        upDate = new Date();
        upDate.setDate(upDate.getDate() + Number(day));
        Year = upDate.getFullYear();
        Month = upDate.getMonth();
        Days = upDate.getDate();
        switch (Month)
        {
            case 0: fMonth="января"; break;
            case 1: fMonth="февраля"; break;
            case 2: fMonth="марта"; break;
            case 3: fMonth="апреля"; break;
            case 4: fMonth="мае"; break;
            case 5: fMonth="июня"; break;
            case 6: fMonth="июля"; break;
            case 7: fMonth="августа"; break;
            case 8: fMonth="сентября"; break;
            case 9: fMonth="октября"; break;
            case 10: fMonth="ноября"; break;
            case 11: fMonth="декабря"; break;
        }
      setDate = +Days+" "+fMonth+" "+Year;
      document.getElementById("outputDay").innerHTML = setDate;
      return day;
    }

    function getCredit(cash, day){
		var balance;
		var rezult;

    	balance = Number(cash) + Number(cash) * Number(day) * 0.000333;
    	rezult = Math.trunc(balance * 100) / 100;
    	document.getElementById("outputCash").innerHTML = rezult;

    }

    function outputDay(vol) {
	      day = vol.value;
	      document.querySelector('#out2').value = day;
        if (typeof(cash) == "undefined") {
            cash = 1000;
        }else{
            cash = cash;
        }
        getDate();
				getCredit(cash, day);
	}