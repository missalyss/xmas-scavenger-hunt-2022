 window.onload = function(){

  let one = document.getElementById('one');
  let hint = document.getElementById('hint');
  let nutcracker = document.getElementById('nutcracker');

  one?.addEventListener('click', ()=> {
    var nextClue = prompt('Put the answer in here--look for a hint!');
    console.log('next: ', typeof nextClue);
    if (nextClue === '8') {
      console.log('NEXT CLUE: ', nextClue);
      nutcracker.style.visibility = 'visible'
    }
  })
  hint?.addEventListener('click', ()=> {
    let bodyBg = document.getElementById('body');
    bodyBg.style.backgroundColor = 'green'
  })

  return;
 }
