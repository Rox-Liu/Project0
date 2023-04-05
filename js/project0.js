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
    });

    $("#btn-o").on("click", function() {
        player1Choice = "O";
        player2Choice = "X";
        $("#btn-o").css("opacity", 0.5);
        $("#btn-x").attr("disabled", true);
        $("#btn-o").attr("disabled", true);
    });

    boxes.on("click", function() {
        turnCounter += 1;
        if (turnCounter % 2 !== 0) {
          player2Choice;
        } else {
          player1Choice;
        }
      });



    $('#top-left').on('click', function () {
        if (turnCounter % 2 !==0) {
            $('#top-left').text(player2Choice);
        } else {
            $('#top-left').text(player1Choice);
        }
        if ($('#top-left').text() !== "") {
            $('#top-left').attr('disabled', true);
        }
        checkForWinner();
    }); 


    $('#top-center').on('click', function () {
        if (turnCounter % 2 !==0) {
            $('#top-center').text(player2Choice);
        } else {
            $('#top-center').text(player1Choice);
        }
        if ($('#top-center').text() !== "") {
            $('#top-center').attr('disabled', true);
        }
        checkForWinner();
    });


    $('#top-right').on('click', function () {
        if (turnCounter % 2 !==0) {
            $('#top-right').text(player2Choice);
        } else {
            $('#top-right').text(player1Choice);
        }
        if ($('#top-right').text() !== "") {
            $('#top-right').attr('disabled', true);
        }
        checkForWinner();
    });


    $('#middle-left').on('click', function () {
        if (turnCounter % 2 !==0) {
            $('#middle-left').text(player2Choice);
        } else {
            $('#middle-left').text(player1Choice);
        }
        if ($('#middle-left').text() !== "") {
            $('#middle-left').attr('disabled', true);
        }
        checkForWinner();
    });


    $('#middle-center').on('click', function () {
        if (turnCounter % 2 !==0) {
            $('#middle-center').text(player2Choice);
        } else {
            $('#middle-center').text(player1Choice);
        }
        if ($('#middle-center').text() !== "") {
            $('#middle-center').attr('disabled', true);
        }
        checkForWinner();
    });


    $('#middle-right').on('click', function () {
        if (turnCounter % 2 !==0) {
            $('#middle-right').text(player2Choice);
        } else {
            $('#middle-right').text(player1Choice);
        }
        if ($('#middle-right').text() !== "") {
            $('#middle-right').attr('disabled', true);
        }
        checkForWinner();
    });



    $('#bottom-left').on('click', function () {
        if (turnCounter % 2 !==0) {
            $('#bottom-left').text(player2Choice);
        } else {
            $('#bottom-left').text(player1Choice);
        }
        if ($('#bottom-left').text() !== "") {
            $('#bottom-left').attr('disabled', true);
        }
        checkForWinner();
    });



    $('#bottom-center').on('click', function () {
        if (turnCounter % 2 !==0) {
            $('#bottom-center').text(player2Choice);
        } else {
            $('#bottom-center').text(player1Choice);
        }
        if ($('#bottom-center').text() !== "") {
            $('#bottom-center').attr('disabled', true);
        }
        checkForWinner();
    });


    $('#bottom-right').on('click', function () {
        if (turnCounter % 2 !==0) {
            $('#bottom-right').text(player2Choice);
        } else {
            $('#bottom-right').text(player1Choice);
        }
        if ($('#bottom-right').text() !== "") {
            $('#bottom-right').attr('disabled', true);
        }
        checkForWinner();
    });

    
    
    // boxes.on("click", function() {
    //     turnCounter += 1;
    //     if (turnCounter % 2 ===0) {
    //         player1Choice = true;
    //         player2Choice = false; 
    //     } else {
    //         player2Choice = true;
    //         player1Choice = false;
    //     }
    // });

    $("#reset").on("click", function() {
        $("#btn-x").removeAttr("disabled");
        $("#btn-o").removeAttr("disabled");
        $("#btn-x").css("opacity", 1);
        $("#btn-o").css("opacity", 1);
        boxes.removeAttr('disabled')
        turnCounter = 0;
        player1Choice = ''
        player2Choice = ''
        boxes.text("");
    });


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

        if ((box1 === box2 && box2 === box3) && box1 !== "") {
            win(box1);
        }
        if ((box4 === box5 && box5 === box6) && box4 !== "") {
            win(box4);
        }
        if ((box7 === box8 && box8 === box9) && box7 !== "") {
            win(box7);
        }

        if ((box1 === box4 && box4 === box7) && box7 !== "") {
            win(box7);
        }
        if ((box2 === box5 && box5 === box8) && box5 !== "") {
            win(box5);
        }

        if ((box3 === box6 && box6 === box9) && box6 !== "") {
            win(box6);
        }

        if ((box1 === box5 && box5 === box9) && box5 !== "") {
            win(box5);
        }

        if ((box3 === box5 && box5 === box7) && box7 !== "") {
            win(box7);
        }

        if (box1 !== "" && box2 !== "" && box3 !== "" && box4 !== "" && box5 !== "" && box6 !== "" && box7 !== "" && box8 !== "" && box9 !== "") {
            draw();
        }
    }

    function win(winner) {
        if (winner === player1Choice) {
          player1GameCounter += 1
          $('#player-1-score').text(player1GameCounter)
        } else {
          player2GameCounter += 1
          $('#player-2-score').text(player2GameCounter)
        }
    
    alert(`${winner} win!`);
    }

    function draw() {
     
        alert("It is a draw!");
        
    }
});

