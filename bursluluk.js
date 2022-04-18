var f = "sometextfile.txt";

writeTextFile(f, "Spoon")
writeTextFile(f, "Cheese monkey")
writeTextFile(f, "Onion")

function writeTextFile(afilename, output)
{
  var txtFile =new File(afilename);
  txtFile.writeln(output);
  txtFile.close();
}