const filesystem=require('fs')
const menu=require('./menu')
const ProfessionalsData=require('./professionalsData')
const readline =require('readline-sync')
// var openingWindow=new menu();
// openingWindow.menu();
//let name1, locality, experience,specialization;

try {

    let adminInput;
    while (adminInput != 7) {

        adminInput = readline.question("==================================================================================\n \n1.add Data\n2.delete Data\n3.update Data\n4.print data\n 7: Exit\n  ==================================================================================\n");
        switch (adminInput) {
            case "1":
                console.log('anything')
                // var data = new ProfessionalsData()
               var name1 = readline.question("enter name : ")
               var locality = readline.question("enter locality :");
              var  experience=readline.question("enter  experience:");
                
              
                choice = readline.question("enter the specialization\n   1: Small business\n   2: Employed \n   3: Individual,\n   4: Enterprise\n ")
                if (choice == 1) {specialization="Small business" }
                if (choice == 2) { specialization="Employed" }
                if (choice == 3) { specialization="Individual" }
                if (choice == 4) { specialization="Enterprise" }
                var data = new ProfessionalsData(name1, locality, experience,specialization)
                for (obj in data) {
                    if (data[obj] === '') {
                        throw new Error(" details should not be empty")
                    }
                }
             //   console.log(data)
            data.addprofessional(data);
           

                break;
            case "2":

               data.deleteprofessional();
                break;
            case "3":
               let PersonName=readline.question('Enter the name of Person Whoes Data Want to update:\n')
                data.updateprofessional(PersonName);
                break;
            case "4":
                data.view();
                break;

            case "5":
                searchpro();
                break;

            case "7":
                console.log(".........................operation ended......................\n");
                return;


            default:

                throw new Error("invalid user input")

        }

    }


}
catch (e) {
    console.log(e.message);
    filesystem.appendFile("log.txt", e.toString(), (err) => {//saving to file (logging the messeges)
        if (err) throw err;
        console.log("log saved....")
    })
}