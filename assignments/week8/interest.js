// $(function () {});
$(document).ready(function() {
    $("#submit").click(function () {
        var loanAmount = $("#loan-amount").val();
        var apr = $("#apr").val();

        loanAmount = parseFloat(loanAmount);
        apr = parseFloat(apr); // SHOULD BE FLOAT to include "pennies".

        console.log(apr);

        var interestPrice = loanAmount * ((apr * 100) /12);
        
        interestPrice = interestPrice.toFixed(2);

        var resultsText = "You will own an extra $" + interestPrice + " after 1 month. <br /> (Monthly Compunding Interest)";

        $("#result-value").html(resultsText);
    });
});