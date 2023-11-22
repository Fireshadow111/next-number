//Declaring variables
        let nextOutput = document.getElementById('nextOutput');
        let calButton = document.getElementById('calButton');

      //Creating array
        let numberArray = [1, 7, 11, 22, 44, 77];

        //function to check if array is empty
        function nextNum() {
            if (numberArray.length === 0) {
                alert('Array is empty.');
                return;
            }

            nextNum.currentIndex = (nextNum.currentIndex + 1) % numberArray.length || 0;44

            //display the next number in the array
            nextOutput.value = numberArray[nextNum.currentIndex];
        }
        nextNum.currentIndex = -1;
        calButton.addEventListener('click', nextNum);