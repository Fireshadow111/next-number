//Declaring variables
        let nextOutput = document.getElementById('nextOutput');
        let calButton = document.getElementById('calButton');

      //Creating array
        let numArray = [1, 7, 11, 22, 44, 77];
        let i = 0

        //function, if i is less than the array length then it will cycle through the array
        function nextNum() {
          if(i<numArray.length){
          let next = numArray[i];
          i++
          nextOutput.value = next
        }
        }
        calButton.addEventListener('click', nextNum)