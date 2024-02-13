



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







document.getElementById('calculate-rectangle').addEventListener('click', function(){
    let w = parseFloat(document.getElementById('rectangle-w').value)
    let l = parseFloat(document.getElementById("rectangle-l").value)
    if(typeof (w+l) === 'number' && !(isNaN(w+l))  ){
        
    let result = w * l 
    document.getElementById('area-title-rectangle').style.display = 'block'
    document.getElementById('area-rectangle').innerText = ` ${result}`
    document.getElementById("rectangle-w").value = ''
    document.getElementById('rectangle-l').value = ''


    }
    else{
        document.getElementById('area-title-rectangle').innerText =`Invalid Input! Please insert a number`
        document.getElementById('area-title-rectangle').style.display = 'block'
        document.getElementById("rectangle-w").value = ''
    document.getElementById('rectangle-l').value = ''
    }
})






document.getElementById('calculate-parallelogram').addEventListener('click', function(){
    let b = parseFloat(document.getElementById('parallelogram-b').value)
    let h = parseFloat(document.getElementById("parallelogram-h").value)
    if(typeof (b+h) === 'number' && !(isNaN(b+h))  ){
        
    let result = b * h 
    document.getElementById('area-title-parallelogram').style.display = 'block'
    document.getElementById('area-parallelogram').innerText = ` ${result}`
    document.getElementById("parallelogram-b").value = ''
    document.getElementById('parallelogram-h').value = ''


    }
    else{
        document.getElementById('area-title-parallelogram').innerText =`Invalid Input! Please insert a number`
        document.getElementById('area-title-parallelogram').style.display = 'block'
        document.getElementById("parallelogram-b").value = ''
    document.getElementById('parallelogram-h').value = ''
    }
})






document.getElementById('calculate-rhombus').addEventListener('click', function(){
    let d1 = parseFloat(document.getElementById('rhombus-d1').value)
    let d2 = parseFloat(document.getElementById("rhombus-d2").value)
    if(typeof (d1+d2) === 'number' && !(isNaN(d1+d2))  ){
        
    let result =0.5 * d1 * d2 
    document.getElementById('area-title-rhombus').style.display = 'block'
    document.getElementById('area-rhombus').innerText = ` ${result}`
    document.getElementById("rhombus-d1").value = ''
    document.getElementById('rhombus-d2').value = ''


    }
    else{
        document.getElementById('area-title-rhombus').innerText =`Invalid Input! Please insert a number`
        document.getElementById('area-title-rhombus').style.display = 'block'
        document.getElementById("rhombus-d1").value = ''
    document.getElementById('rhombus-d2').value = ''
    }
})







document.getElementById('calculate-pentagon').addEventListener('click', function(){
    let p = parseFloat(document.getElementById('pentagon-p').value)
    let b = parseFloat(document.getElementById("pentagon-b").value)
    if(typeof (p+b) === 'number' && !(isNaN(p+b))  ){
        
    let result =0.5 * p * b 
    document.getElementById('area-title-pentagon').style.display = 'block'
    document.getElementById('area-pentagon').innerText = ` ${result}`
    document.getElementById("pentagon-p").value = ''
    document.getElementById('pentagon-b').value = ''


    }
    else{
        document.getElementById('area-title-pentagon').innerText =`Invalid Input! Please insert a number`
        document.getElementById('area-title-pentagon').style.display = 'block'
        document.getElementById("pentagon-p").value = ''
    document.getElementById('pentagon-b').value = ''
    }
})






document.getElementById('calculate-ellipse').addEventListener('click', function(){
    let a = parseFloat(document.getElementById('ellipse-a').value)
    let b = parseFloat(document.getElementById("ellipse-b").value)
    if(typeof (a+b) === 'number' && !(isNaN(a+b))  ){
        
    let result =Math.PI * a * b 
    document.getElementById('area-title-ellipse').style.display = 'block'
    document.getElementById('area-ellipse').innerText = ` ${result}`
    document.getElementById("ellipse-a").value = ''
    document.getElementById('ellipse-b').value = ''


    }
    else{
        document.getElementById('area-title-ellipse').innerText =`Invalid Input! Please insert a number`
        document.getElementById('area-title-ellipse').style.display = 'block'
        document.getElementById("ellipse-a").value = ''
    document.getElementById('ellipse-b').value = ''
    }
})