public static class Challenge04 {

    public static string Resolve() {
        var valids = new List<int>();

        for(int n = 11098; n < 98123; n++) {
            var nStr = n.ToString();
            var replaced = nStr.Replace("5", "");
            var digits = nStr.ToList();
            
            var ascCount = 0;
            for(int i = 1; i<digits.Count; i++) {
                ascCount += digits[i] >= digits[i-1] ? 1 : 0;
            }

            if (replaced.Length <= 3 && ascCount == 4) valids.Add(n);
        }

        return $"{valids.Count}-{valids[55]}";
    }
}