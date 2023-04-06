$(document).ready(function () { 
    let player1Choice = "";
    let player2Choice = "";
    let boxes = $(".box");
    let turnCounter = 0;
    let player1GameCounter = 0;
    let player2GameCounter = 0;

    $("#btn-x").on("click", function() {
        player1Choice = "X";
        player2Choice = "O";
        $("#btn-x").css("opacity", 0.5);
        $("#btn-x").attr("disabled", true);
        $("#btn-o").attr("disabled", true);
        turnCounter = 0;
    });

    $("#btn-o").on("click", function() {
        player1Choice = "O";
        player2Choice = "X";
        $("#btn-o").css("opacity", 0.5);
        $("#btn-x").attr("disabled", true);
        $("#btn-o").attr("disabled", true);
        turnCounter = 0;
    });

    boxes.on("click", function() {
        turnCounter += 1;
        if (turnCounter % 2 === 0) {
            player2Choice;
        } else {
            player1Choice;
        }
    });

    const oneClick = function(boxName) {
        $(boxName).on('click', function () {
            if (turnCounter % 2 !==0) {
                $(boxName).text(player1Choice);
            } else {
                $(boxName).text(player2Choice);
            }
            if ($(boxName).text() !== "") {
                $(boxName).attr('disabled', true);
            }
            checkForWinner();
        })
    };

    oneClick('#top-left');
    oneClick('#top-center');
    oneClick('#top-right');
    oneClick('#middle-left');
    oneClick('#middle-center');
    oneClick('#middle-right');
    oneClick('#bottom-left');
    oneClick('#bottom-center');
    oneClick('#bottom-right');


    $("#reset").on("click", function() {
        reset();
    });

    $("#reset2").on("click", function() {
        reset();
    });

    function reset() {
        $("#btn-x").removeAttr("disabled");
        $("#btn-o").removeAttr("disabled");
        $("#btn-x").css("opacity", 1);
        $("#btn-o").css("opacity", 1);
        boxes.removeAttr('disabled');
        turnCounter = 0;
        player1Choice = '';
        player2Choice = '';
        boxes.text("");
        $('#result').text("");
        $('#result').removeClass("animate__bounce");
        $('#player-1-score').removeClass('animate__flipInX');
        $('#player-2-score').removeClass('animate__flipInX');
        $(".won-banner").removeClass("appear");
    };

    function checkForWinner() {
        let box1 = $('#top-left').text();
        let box2 = $('#top-center').text();
        let box3 = $('#top-right').text();
        let box4 = $('#middle-left').text();
        let box5 = $('#middle-center').text();
        let box6 = $('#middle-right').text();
        let box7 = $('#bottom-left').text();
        let box8 = $('#bottom-center').text();
        let box9 = $('#bottom-right').text();
    
        let winnerFound = false;
    
        if ((box1 === box2 && box2 === box3) && box1 !== "") {
            win(box1);
            winnerFound = true;
        }
        if ((box4 === box5 && box5 === box6) && box4 !== "") {
            win(box4);
            winnerFound = true;
        }
        if ((box7 === box8 && box8 === box9) && box7 !== "") {
            win(box7);
            winnerFound = true;
        }
    
        if ((box1 === box4 && box4 === box7) && box7 !== "") {
            win(box7);
            winnerFound = true;
        }
        if ((box2 === box5 && box5 === box8) && box5 !== "") {
            win(box5);
            winnerFound = true;
        }
    
        if ((box3 === box6 && box6 === box9) && box6 !== "") {
            win(box6);
            winnerFound = true;
        }
    
        if ((box1 === box5 && box5 === box9) && box5 !== "") {
            win(box5);
            winnerFound = true;
        }
    
        if ((box3 === box5 && box5 === box7) && box7 !== "") {
            win(box7);
            winnerFound = true;
        }
    
        if (!winnerFound && box1 !== "" && box2 !== "" && box3 !== "" && box4 !== "" && box5 !== "" && box6 !== "" && box7 !== "" && box8 !== "" && box9 !== "") {
            draw();
        }
    };

    function win(winner) {
        if (winner === player1Choice) {
            player1GameCounter += 1
            $('#player-1-score').text(player1GameCounter);
            $('#player-1-score').addClass('animate__flipInX');
        } else {
            player2GameCounter += 1
            $('#player-2-score').text(player2GameCounter);
            $('#player-2-score').addClass('animate__flipInX');
        }
        $('#result').text(`${winner} win!`);
        $('#result').addClass('animate__bounce');
        boxes.attr('disabled', true);
        $(".won-banner").addClass("appear");
    };

    function draw() {
        $('#result').text('It is a tie!');
        $('#result').addClass('animate__bounce');
        $(".won-banner").addClass("appear");
    };

});