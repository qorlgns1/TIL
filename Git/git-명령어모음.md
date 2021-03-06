## git 기본 사용법
```shell
git init
# 리포지토리 초기화. '.git'폴더 생성. 이 폴더에 현재 폴더와 관련된 관리 정보가 저장. working tree라고 부른다. 변경 내역 등 관리.

git status
# 리포지토리 상태 표시. 

git add 파일명
# 스테이지 영역(커밋 전 임시 영역)에 파일 추가. 

git commit -m '첫 커밋'
# 스테이지 영역에 기록된 시점들 파일을 실제 리포지토리 변경 내역에 반영.

git log
# 리포지토리에 커밋된 로그 확인. 

git log --pretty=short
# 로그 확인시 첫 번째 요약 줄만 보여주기

git log 폴더/파일명
# 해당 파일에 관련된 로그만 보기

git log -p
# 커밋에서 변경된 내용 함께 확인. (뒤에 파일/폴더명 붙여도 됨)

git diff
# working tree, 스테이지 영역, 최신 커밋 사이 변경 확인

git diff HEAD
# 최신 commit과의 차이 확인

git branch
# 브랜치 목록 표시, 현재 어떤 브랜치인지.

git checkout -b 'feature-A'
# feature-A 이름의 브랜치 만들고 그 브랜치로 이동

git merge --no--ff feature-A
# 현재 브랜치에서 feature-A브랜치를 머지. 옵션은 머지 커밋도 함께 남기고 싶다는 뜻.

git log --graph
# 브랜치를 시각적으로 확인

git reset --hard 커밋해시값
# HEAD, 스테이지, Working tree를 특정 커밋으로 복원.

git reflog
# 현재 브랜치 뿐만이 아니라 이 리포지토리에서 진행된 모든 로그 볼 수 있음

git commit --amend
# 바로 전에 작성했던 커밋 메세지 수정

git commit -am "commit 메시지"
# add, commit 한번에 하기

git remote add origin git@github.com:사용자명/저장소이름.git
# 주소의 저장소를 원격 저장소로 설정

git push -u origin master
# -u옵션: 로컬 리포에 있는 현재 브랜치 upstream이 origin 리포의 master 브랜치로 설정.

git push -u origin feature-D
# 원격의 feature-D브랜치로 push

git clone git@github....git
# 주소의 리포지토리 받아오기

git branch -a
# 로컬 리포지토리랑 원격 리포지토리 브랜치 모두 표시

```

### 커밋 메세지
- 첫 번째 줄: 변경 내용 한 줄 요약
- 두 번째 줄: 공백
- 세 번째 줄 이후: 변경과 관련 내용 상세 기록

<br>
<br>
<br>
<br>
<br>
<br>

참고 :  [milooy](https://github.com/milooy/TIL/blob/master/documents/Git/git-guide.md)