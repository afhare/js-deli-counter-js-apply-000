var katzDeliLine = [];

var ticketNumber = 1;

function takeANumber(katzDeliLine){
  let number = ticketNumber;
  katzDeliLine.push(number);
  ticketNumber++;
  return `Welcome, ${number}. You are number ${katzDeliLine.length} in line.` 
}

function nowServing(katzDeliLine){
   if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{ 
    var nowServe = "Currently serving "+ katzDeliLine[0]+".";
    katzDeliLine.shift();
    return nowServe;
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  }
  
  else { 
    var newLine = [];
    for (var i=0;i<line.length;i++){
      newLine.push(` ${i+1}. ${line[i]}`);
    }
    return "The line is currently:"+ newLine;
      }
  
}