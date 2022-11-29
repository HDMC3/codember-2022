public static class Challenge01
{
    public static string Resolve()
    {
        List<string[]> users = new List<string[]>();
        try
        {
            StreamReader sr = new StreamReader("users.txt");
            string? line = sr.ReadLine();

            string currentUser = "";
            while (line != null)
            {
                if (line != "")
                {
                    currentUser += $" {line}";
                }
                else
                {
                    var user = currentUser.Trim().Split(' ');
                    users.Add(user);
                    currentUser = "";
                }
                line = sr.ReadLine();
            }

            sr.Close();
        }
        catch (System.Exception e)
        {
            Console.WriteLine(e);
        }

        var result = (count: 0, lastUser: "");
        foreach (var userData in users)
        {
            Dictionary<string, int> validKeys = new Dictionary<string, int>() {
                { "usr", 0 },
                { "eme", 0 },
                { "psw", 0 },
                { "age", 0 },
                { "loc", 0 },
                { "fll", 0 }
            };
            
            string usr = "";
            foreach (var prop in userData)
            {
                var key = prop.Substring(0, 3);
                var value = prop.Substring(4);

                validKeys.Remove(key);

                if (key == "usr")
                {
                    usr = value;
                }
            }

            if (validKeys.Count == 0)
            {
                result.count += 1;
                result.lastUser = usr;
            }
        }

        return $"{result.count}:{result.lastUser}";
    }
}