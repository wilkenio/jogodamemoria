function flippedCard() {
    //spinning card
    this.classList.add('flip');
    //capturing if the card already found the pair
    let status = this.dataset.status;

    if (status == 'false') {
        //checking if the cards are the same and armazenando no array
        if (verify[0] == '') {
            verify[0] = this.dataset.icon
            verify[2] = this.id
        } else if (verify[1] == '') {
            verify[1] = this.dataset.icon
            verify[3] = this.id

            if (verify[2] !== verify[3]) {

                //check 
                if (verify[0] == verify[1]) {

                    document.getElementById(verify[2]).dataset.status = true;
                    document.getElementById(verify[3]).dataset.status = true;

                    verify[0] = ''
                    verify[1] = ''
                    verify[2] = ''
                    verify[3] = ''
                    count++
                    allCardsFlipped()
                } else {
                    setTimeout(() => {
                        document.getElementById(verify[2]).classList.remove('flip');
                        document.getElementById(verify[3]).classList.remove('flip');

                        document.getElementById(verify[2]).dataset.status = false;
                        document.getElementById(verify[3]).dataset.status = false;

                        verify[0] = ''
                        verify[1] = ''
                        verify[2] = ''
                        verify[3] = ''
                    }, 500);
                }
            } else {
                verify[1] = ''
                verify[3] = ''
            }
        }

    }
}
