$(document).ready(
    function () {

        $("#pictures img").click(generateQuestions);
        $("#guess").change(checkAnswer);
        $("#hideTextBox").hide();
        $("#displayPersonInfo").hide();
        $("#donate").click(displayUserInfo);

        var myRules =
            {
                name:
                    {
                        required: true,
                        digits: false
                    },
                email:
                    {
                        required: true
                    },
                amount:
                    {
                        required: true,
                        digits: true,
                        min: 1,
                        max: 9999999
                    }
            };

        var myMessages =
            {
                name:
                    {
                        required: "Please enter your name",
                        digits: "Please Enter your name"
                    },
                email:
                    {
                        required: "Please enter a valid email address"
                    },
                amount:
                    {
                        required: "Please enter a dollar amount",
                        digits: "Not a number",
                        min: "Please enter a number greater than 0",
                        max: "Too much money"
                    }
            };

        $("form").validate(
            {
                submitHandler: displayUserInfo,
                rules: myRules,
                messages: myMessages
            }
        );

        function checkAnswer()
        {
            var initialAnswer = $("#guess").val();
            var answer = initialAnswer.toUpperCase();

            if (answer === "A" || answer === "B" || answer === "D")
            {
                $("#displayResult").text("Nice guess, but Peewee prefers a different treat").css({"border-style":"solid", "border-radius":"3px", "background-color":"coral"});
                $("#displayResult").slideUp(1).slideDown(500);
            }
            else if (answer === "C")
            {
                $("#displayResult").text("You got it! Peewee will enjoy his Kittle").css({"border-style":"solid", "border-radius":"3px", "background-color":"floralwhite"});
            }
            else
            {
                $("#displayResult").text("Please choose A, B, C, or D");
            }
        }

        function generateQuestions()
        {
            var treats = ["A: Chicken", "B: Mice", "C: Kittles", "D: Broccoli"];
            for (var i = 0; i < treats.length; i++)
            {
                $("#askQuestion").append(treats[i] + '<br>');
            }
            $("#hideTextBox").show();
        }
    }
);