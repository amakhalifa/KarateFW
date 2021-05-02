package examples.pet;

import com.intuit.karate.junit5.Karate;

class PetRunner {

    @Karate.Test
    Karate testPets() {
        return Karate.run("pets").relativeTo(getClass());
    }

}