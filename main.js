aaa=[]
function pesel()
{
    dzien=document.getElementById("dzien").value
    miesiac=parseInt(document.getElementById("miesiac").value)
    rok=document.getElementById("rok").value
    plec=document.getElementById("plec").value
    rok=rok.split("")
    if (rok[0]!=1) {
        miesiac+=20
        miesiac=miesiac.toString().split("").map(Number)
    }
    else 
    {
        if (miesiac<10) {
            miesiac_bez_2_cyfr="0"+miesiac
            miesiac=miesiac_bez_2_cyfr.split("")
        }
        else  
        {
            miesiac=miesiac.toString().split("").map(Number)
            console.log(miesiac)
        }
        
    }
    console.log(dzien)
    console.log(miesiac)
    console.log(rok)
    if (dzien<10) {
        dzien_bez_2_cyfr="0"+dzien
        dzien_bez_2_cyfr=dzien_bez_2_cyfr.split("")
        dzien=dzien_bez_2_cyfr
    }
    else dzien=dzien.split("")
    plec_liczba=Math.floor(Math.random()*10)
    random=Math.floor(Math.random()*(1000-100))+100
    random_array=random.toString().split("")
    if (plec=="kobieta") 
    {
        while (plec_liczba%2!=0) 
        {
            plec_liczba=Math.floor(Math.random()*10)
        }
    }
    if (plec=="chlop") 
    {
        while (plec_liczba%2==0) 
        {
            plec_liczba=Math.floor(Math.random()*10)
        }
    }
    console.log(random_array)
    pesell=rok[2]+rok[3]+miesiac[0]+miesiac[1]+dzien[0]+dzien[1]+random+plec_liczba
    console.log(pesell)
    pesell2=kontrolna(pesell)
    document.getElementById("wynik_pesela").innerHTML=pesell+pesell2
}
function kontrolna(a) 
{
    b=0
    a
    a.toString().split("")
    aaa[0]=a[0]*1
    aaa[1]=a[1]*3
    aaa[2]=a[2]*7
    aaa[3]=a[3]*9
    aaa[4]=a[4]*1
    aaa[5]=a[5]*3
    aaa[6]=a[6]*7
    aaa[7]=a[7]*9
    aaa[8]=a[8]*1
    aaa[9]=a[9]*3
    for (let index = 0; index < 10; index++) {
        if (aaa[index]%10!=0) {
            aaa[index]%=10
        }
        b+=aaa[index]
    }
    console.log(b)
    b%=10
    console.log(b)
    b=10-b
    if (b==10) {
        b=0
    }
    console.log(b)
    return b

}
function sprawdz() {
    pesel_check=document.getElementById("sprawdzenie").value
    pesel_check_leng=pesel_check.length
    console.log(pesel_check_leng)
    document.getElementById("dziens").innerHTML= ""
    if (pesel_check_leng==11) {
        pesel_check=pesel_check.toString()
        pesel_check=pesel_check.split("")
        console.log(pesel_check)
        if ( pesel_check[2]>=2) {
            document.getElementById("roks").innerHTML="ROK "+ 20+pesel_check[0]+pesel_check[1]
            document.getElementById("miesiacs").innerHTML="MIESIĄC "+(pesel_check[2]-2)+pesel_check[3]
        }
        else 
        {
            document.getElementById("roks").innerHTML="ROK "+ 19+pesel_check[0]+pesel_check[1]
            document.getElementById("miesiacs").innerHTML="MIESIĄC "+(pesel_check[2])+pesel_check[3]
        }
        document.getElementById("dziens").innerHTML="DZIEŃ " +pesel_check[4]+pesel_check[5]
        if (pesel_check[9]%2==0) {
            document.getElementById("plecs").innerHTML="PŁEĆ KOBIETA" 
            
        }
        else document.getElementById("plecs").innerHTML="PŁEĆ MĘŻCZYZNA" 
        liczba=kontrolna(pesel_check)
        if (liczba==pesel_check[10]) {
            document.getElementById("liczba_kontrolna").innerHTML="LICZBA KONTROLNA JEST DOBRA PESEL WŁAŚCIWY" 
        }
        else document.getElementById("liczba_kontrolna").innerHTML="LICZBA KONTROLNA JEST ZŁA PESEL NIE WŁAŚCIWY" 

        
    }
   else document.getElementById("dziens").innerHTML= "ZŁY PESEL PROSZE SPRÓBOWAĆ PONOWNIE"
}