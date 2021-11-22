$(document).ready(function(){
    var note1 = $('#myNote1');
    var note2 = $('#myNote2');
    var note3 = $('#myNote3');
    var note4 = $('#myNote4');
    var note5 = $('#myNote5');

    const sum = (note1, note2, note3, note4, note5) => {
        let result = (Number(note1) + Number(note2) + Number(note3) + Number(note4) + Number(note5)) / 5;
        return result;
    }

    $("#result").click( () => {
        let average = sum(note1.val(), note2.val(), note3.val(), note4.val(), note5.val());
        $("#returnResult").val(average);

        switch(true){
            case (average >= 0 && average < 10) :
                $('#myComment').val('En dessous de la moyenne');
            break;

            case (average >= 10 && average < 13) :
                $('#myComment').val('Moyen');
            break;

            case (average >= 13 && average < 16) :
                $('#myComment').val('Bien');
            break;

            case (average >= 16 && average < 20) :
                $('#myComment').val('Très bien');
            break;

            case (average == 20) :
                $('#myComment').val('Excellent');
            break;
            default:
        }
    });
})


// on met .value quand c'est des input 
// sinon on met innerHTML