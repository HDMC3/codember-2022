public static class Challenge02 {
    
    public static string Resolve() {
        var encryptMessage = "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101";
        var currentChar = "";
        var result = "";
        foreach (var chr in encryptMessage)
        {   
            if (chr == ' ') {
                result += " ";
                continue;
            }

            currentChar += chr;
            var intChr = int.Parse(currentChar);
            if (intChr >= 97) {
                result += System.Convert.ToChar(intChr);
                currentChar = "";
            }
        }

        return result;
    }
}