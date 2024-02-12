



document.getElementById('calculate-triangle').addEventListener('click', function(){
    let height = parseFloat(document.getElementById('triangle-h').value)
    let base = parseFloat(document.getElementById("triangle-b").value)
    if(typeof (height+base) === 'number' && !(isNaN(height+base))  ){
        
    let result = 0.5 * base * height 
    document.getElementById('area-title-triangle').style.display = 'block'
    document.getElementById('area-triangle').innerText = ` ${result}`
    document.getElementById("triangle-b").value = ''
    document.getElementById('triangle-h').value = ''


    }
    else{
        document.getElementById('area-title-triangle').innerText =`Invalid Input! Please insert a number`
        document.getElementById('area-title-triangle').style.display = 'block'
        document.getElementById("triangle-b").value = ''
    document.getElementById('triangle-h').value = ''
    }
})