$(document).ready(
    function () {

        var params = new URLSearchParams(window.location.search);
        var name = params.get("name");
        var email = params.get("email");
        var amount = parseInt(params.get("amount"));


            $("#donations").hide();
            $("#displayPersonInfo").show();

            $("#personName").text(`Your Name: ${name}`);

            $("#personEmail").text(`Your Email: ${email}`);

            $("#personDonation").text(`Your donation: $${amount}`);

            if(amount >= 1 && amount < 6)
            {
                $("#outputGift").text(`Thank you very much ${name} for your donation of $${amount}! We will be reaching out to send you your Keychain of Peewee.`).css({"border-style":"solid",
                "border-color":"black", "border-radius":"5px", "background-color":"floralwhite"});
            }
            else if (amount >= 6 && amount < 13)
            {
                $("#outputGift").text(`Thank you very much ${name} for your donation of $${amount}! We will be reaching out to send you your Coffee Mug.`).css({"border-style":"solid",
                "border-color":"black", "border-radius":"5px", "background-color":"floralwhite"});
            }
            else if (amount >= 13)
            {
                $("#outputGift").text(`Thank you very much ${name} for your donation of $${amount}! We will be reaching out to send you your Keychain of Peewee, Coffee Mug, and T-Shirt.`).css({"border-style":"solid",
                "border-color":"black", "border-radius":"5px", "background-color":"floralwhite"});
            }

    }
);