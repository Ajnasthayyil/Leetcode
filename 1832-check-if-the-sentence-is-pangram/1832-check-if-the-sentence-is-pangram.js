var checkIfPangram = function(sentence) {
        sentence.toLowerCase()
        let letters="abcdefghijklmnopqrstuvwxyz";
        for(const key of letters)
        {
         if (!sentence.includes(key))
         {
            return false;
         }
        }
        return true;
        
        
    }

