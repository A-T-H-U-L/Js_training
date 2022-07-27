readline = require('readline-sync')
array = new Array()
class ProfessionalsData {

    //professional = new ProfessionalsData();
  

    constructor(professionalsName, locality, experience, specialty) {
        this.professionalsName = professionalsName;
        this.locality = locality;
        this.experience = experience;
        this.specialty = specialty;
    }

    

    addprofessional(objectOfInputData) {

        array.push(objectOfInputData);
        console.log(array)
        return array;
    }
    deleteprofessional(inputByUser) {
        array.forEach((element) => {
            if (element.professionalsName === inputByUser) {

                arr.splice(i, 1)
                // console.log(arr)
                return;
            }
            i++;
        })

        return arr;
    }


    //  nameOfAccountent = readline.question("enter name of Accountent  :\n");

    updateSpecialityOfprofessional(newSpeciality) {
        this.speciality=newSpeciality
        console.log(array)
        return array;

    }

    updateExperienceOfprofessional(newExperience) {
        this.experience=newExperience
           console.log(array)
           return array;
   
       }

    updateNameOfprofessional(newName) {
        this.professionalsName=newName;
        console.log(array)
        return array;
    }
    updateprofessional(nameOfAccountent) {
        let update,newName,newlocality,newExperience;
        let valueToUpdate;
        array.forEach((value) => {

            if (value.professionalsName == nameOfAccountent) {
                valueToUpdate = readline.question("what catergory want to change (name/locality/experience) :")
                switch (valueToUpdate) {
                    case "name": newName = readline.question("enter new name :")
                      this.updateNameOfprofessional(newName)

                        break;
                    case "locality": newlocality = readline.question("enter your new locality")
                        updateLocalityOfprofessional(newlocality)

                        break;

                    case "experience": newExperience = readline.question("enter new experience :")
                        updateExperienceOfprofessional(newExperience)

                        break;
                    default: "wrong entry"
                        break;
                }

                // if (valueToUpdate === "name") {
                //     newName = readline.question("enter new name :")
                //     updateNameOfprofessional(newName)
                // }
                // if (valueToUpdate === "locality") {
                //         newlocality=readline.question("enter your new locality")
                //         updateLocalityOfprofessional(newlocality)

                // }
                // else if (valueToUpdate === "experience") {
                //     newExperience=readline.question("enter new experience :")
                //     updateExperienceOfprofessional(newExperience);
                // }

                console.log(value)
                update = value
                return;
            }
        })

        return update;
    }

 


 



    view(array) {
        let storedDetails = JSON.stringify(array);

        console.log(storedDetails)

        return JSON.parse(storedDetails);
    }

}

module.exports = ProfessionalsData;
