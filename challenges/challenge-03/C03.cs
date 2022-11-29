public static class Challenge03 { 
    
    public static string Resolve() {
        string[] colors = new string[0];
        try
        {
            string colorsStr = File.ReadAllText("colors.txt");
            colorsStr = colorsStr.Replace("'", "").Replace(" ", "").Replace("[", "").Replace("]", "").Replace("\n", "");
            colors = colorsStr.Split(',');
        }
        catch (System.Exception e)
        {
            Console.WriteLine(e);
        }
        List<List<string>> zebras = new List<List<string>>() { 
            new List<string>() { colors[0], colors[1] }
        };
        
        var max_zebra = new List<string>();
        
        for(int i = 2; i < colors.Length; i++) {
            var zebra  = zebras[zebras.Count - 1];
            var lastZebraColor = zebra[zebra.Count - 1];

            if (lastZebraColor != colors[i] && ( zebra.Count == 1 || colors[i] == zebra[zebra.Count - 2] )) {
                zebra.Add(colors[i]);
                continue;
            }

            if ( ( zebra.Count == 1 && lastZebraColor == colors[i] ) || ( lastZebraColor != colors[i] && colors[i] != zebra[zebra.Count - 2] ) ) {
                max_zebra = zebra.Count > max_zebra.Count ? zebra : max_zebra;
                if (i+1 > colors.Length - 1 || colors[i+1] != lastZebraColor) {
                    zebras.Add(new List<string> { colors[i] });
                    continue;
                }

                zebras.Add(new List<string> { lastZebraColor, colors[i] });
                continue;
            }

            if (lastZebraColor == colors[i]) {
                max_zebra = zebra.Count > max_zebra.Count ? zebra : max_zebra;
                zebras.Add(new List<string> { colors[i] });
                continue;
            }
        }

        return $"{max_zebra.Count}@{max_zebra.Last()}";
    }
}