- .zshrc 인 경우
- nvm 설치가 되어 있어야 함

```bash
autoload_nvmrc() {
  if [ -f .nvmrc ]; then
    nvm install # .nvmrc 파일에 지정된 노드 버전을 설치 (이미 설치된 경우 무시)
    nvm use # .nvmrc 파일에 지정된 노드 버전을 사용
  fi
}

autoload -U add-zsh-hook
add-zsh-hook chpwd autoload_nvmrc
autoload_nvmrc
```
