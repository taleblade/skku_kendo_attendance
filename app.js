// app.js

// 출석 기록을 저장할 객체 { 학번: 출석 횟수 }
const attendanceRecord = {};

// 학생 추가 함수 (여러 명)
function addStudents() {
    const studentIdsInput = document.getElementById("studentIdsInput").value;
    const studentIds = studentIdsInput.split(","); // 콤마로 구분된 학번들
    studentIds.forEach(studentId => {
        const trimmedId = studentId.trim();
        if (trimmedId) {
            if (!attendanceRecord[trimmedId]) {
                attendanceRecord[trimmedId] = 0;
                alert(`학생 ${trimmedId}가 추가되었습니다.`);
            } else {
                alert(`학생 ${trimmedId}는 이미 존재합니다.`);
            }
        }
    });
    document.getElementById("studentIdsInput").value = "";  // 입력 필드 초기화
}

// 출석 체크 함수
function markAttendance() {
    const studentId = document.getElementById("attendanceIdInput").value.trim();
    if (attendanceRecord[studentId] !== undefined) {
        attendanceRecord[studentId] += 1;
        alert(`학생 ${studentId}의 출석이 기록되었습니다. 현재 출석 횟수: ${attendanceRecord[studentId]}`);
    } else {
        alert(`학생 ${studentId}가 등록되지 않았습니다.`);
    }
    document.getElementById("attendanceIdInput").value = "";  // 입력 필드 초기화
}

// 출석 순위 보기 함수
function showRankings() {
    const rankingList = document.getElementById("rankingList");
    rankingList.innerHTML = "";  // 리스트 초기화

    // 출석 횟수에 따라 정렬
    const sortedStudents = Object.entries(attendanceRecord).sort((a, b) => b[1] - a[1]);

    sortedStudents.forEach(([studentId, attendanceCount], index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}위: 학번 ${studentId}, 출석 횟수: ${attendanceCount}`;
        rankingList.appendChild(listItem);
    });
}

// 출석 기록 보기 함수
function showAttendance() {
    const attendanceList = document.getElementById("attendanceList");
    attendanceList.innerHTML = "";  // 리스트 초기화

    Object.entries(attendanceRecord).forEach(([studentId, attendanceCount]) => {
        const listItem = document.createElement("li");
        listItem.textContent = `학번 ${studentId}: 출석 횟수 ${attendanceCount}`;
        attendanceList.appendChild(listItem);
    });
}
