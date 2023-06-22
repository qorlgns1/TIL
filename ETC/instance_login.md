# 클라우드 인스턴스 접속을 어떻게 했더라......?

약 1년전 oracle cloud로 인스턴스를 만들었는데, 사용을 안하다보니 접속하는 방법을 까먹었다.  
회사에서 갑자기 떠올라서 로그인하던 방식대로 시도해봤지만 역시나 실패..  
하지만 집에서 똑같이 시도하니 정상적으로 작동하였다.

## 집에서 시도했을 때 사용이 가능했던 이유

서버 컴퓨터에서 `~/.ssh/authorized_keys` 파일을 확인해보니 pub키가 들어있었고, 그것은 집에 있는 내 맥북에 `~/.ssh.id_rsa.pub` 키와 동일했었다.(내가 언제 바꿨었지.........?............)  
`ssh root@ip주소` 이렇게 접속을 했는데, 두개의 키가 동일해서인지 비밀번호 없이도 접속이 가능했다.

## 여러 컴퓨터에서 접속하고 싶으면??

`~/.ssh/authorized_keys` 파일에 한줄한줄 등록하면 됬다.

## pem키를 이용해 외부에서도 접속하고 싶었다. 방법은??

aws에서 ec2를 이용해 인스턴스를 만들었는데, 거기서는 pem key가 필요했다.  
그것과 동일하게 접속하고 싶었고, 그것에 대해 방법을 알아봤다.

서버에서 pem키를 생성해줘야한다. 일반적으로 `~/.ssh/` 경로에 생성한다.

```bash
# pem key 생성
ssh-keygen -t rsa -b 2048 -f ~/.ssh/mykey.pem

# 키 파일을 소유자만 읽고 쓸 수 있도록 설정하는 명령어
chmod 400 ~/.ssh/mykey.pem
```

그리고 해당 pem키를 열어 키를 복사하고, .pem 확장자를 가진 파일을 만들어 거기에 복사한 서버에서 생성한 pem키 데이터를 넣고 저장하여 접속을 시도했다.  
하지만 에러가 발생했다.

```bash
Permissions 0644 for 'kihoon_oracle_cloud.pem' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key "kihoon_oracle_cloud.pem": bad permissions
root@ip주소: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).
```

이유는 권한이 너무 개방적으로 설정되서 발생한 에러였다.  
내 컴퓨터에서 생성한 pem키에 권한을 부여했다.

```bash
chmod 400 ~/.ssh/kihoon_oracle_cloud.pem
```

하지만 다음 에러를 발견했다.

```bash
root@ip주소: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).
```

원인은 서버에서 암호 인증을 활성화하지 않아서였다.

```bash
sudo vi /etc/ssh/sshd_config

PasswordAuthentication yes
ChallengeResponseAuthentication no

# ssh 서비스 재시작
sudo systemctl restart sshd
```

이렇게 하니 모든 문제가 해결되었다.

이것들이 어떻게 되는것일까를 고민하고, 그것에 대한 퍼즐조각이 맞춰졌을 때 희열은 너무 짜릿한거같다~.~
