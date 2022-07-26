
class ProfessionalsData {
    readline = require('readline-sync')
    professional = new ProfessionalsData();
    array = new Array()

    constructor(professionalsName, locality, experience, specialty) {
        this.professionalsName = professionalsName;
        this.locality = locality;
        this.experience = experience;
        this.specialty = specialty;
    }

    get professionalsName() {
        return this.professionalsName;
    }

    get locality() {
        return this.locality;

    }
    get experience() {
        return this.experience;
    }
    get specialty() {
        return this.specialty
    }
    set professionalsName(value) {
        this.professionalsName = value;
    }
    set locality(value) {
        this.locality = value;
    }
    set experience(value) {
        this.experience = value;
    }
    set specialty(value) {
        this.experience = value;
    }




    addprofessional(objectOfInputData) {

        array.push(objectOfInputData);
        return this.array;
    }
    deleteprofessional(inputByUser) {
        array.forEach((element) => {
            if (element.pname === inputByUser) {

                arr.splice(i, 1)
                // console.log(arr)
                return;
            }
            i++;
        })

        return arr;
    }


    nameOfAccountent = rl.question("enter name of Accountent  :\n");


    updateprofessional(nameOfAccountent) {
        let update;
        this.array.forEach((value) => {

            if (value.professionalsName == nameOfAccountent) {
                valueToUpdate = readline.question("what catergory want to change (name/locality/experience) :")
                switch (valueToUpdate) {
                    case "name": newName = readline.question("enter new name :")
                        updateNameOfprofessional(newName)

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

    updateNameOfprofessional(newName) {
        professional.professionalsName(newName);
        console.log(this.array)
        return this.array;
    }

    updateLocalityOfprofessional(newlocality) {
        professional.locality(newlocality);
        console.log(this.array)
        return this.array;
    }

    updateExperienceOfprofessional(newExperience) {
        professional.experience(newExperience);
        console.log(this.array)
        return this.array;

    }
    updateSpecialityOfprofessional(newSpeciality) {
        professional.specialty(newSpeciality);
        console.log(this.array)
        return this.array;

    }


    view(array) {
        let storedDetails = JSON.stringify(array);

        console.log(storedDetails)

        return JSON.parse(storedDetails);
    }

}
module.exports=new ProfessionalsData()
