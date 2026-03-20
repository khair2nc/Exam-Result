function searchResult() {
    let roll = document.getElementById("rollInput").value;
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let student = data.find(s => s.roll === roll);
            if (student) {
                document.getElementById("resultArea").innerHTML = 
                    `নাম: ${student.name} <br> GPA: ${student.gpa}`;
            } else {
                alert("রেজাল্ট পাওয়া যায়নি!");
            }
        });
}
