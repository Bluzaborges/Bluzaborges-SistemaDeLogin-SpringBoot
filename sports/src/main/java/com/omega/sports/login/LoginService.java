package com.omega.sports.login;

import com.omega.sports.appuser.AppUser;
import com.omega.sports.appuser.AppUserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class LoginService {

    private final AppUserRepository appUserRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserDetails login(LoginRequest request){

        if (appUserRepository.findByEmail(request.getEmail()).isEmpty()){
            throw new IllegalStateException("Email incorreto");
        }

        Optional<AppUser> user = appUserRepository.findByEmail(request.getEmail());

        boolean equalsPasswords = bCryptPasswordEncoder
                .matches(request.getPassword(), user.get().getPassword());

        if (!equalsPasswords){
            throw new IllegalStateException("Senha incorreta");
        }

        if (!user.get().getEnabled()){
            throw new IllegalStateException("Confirme seu e-mail para logar na sua conta");
        }

        return user.orElseThrow();

    }

}
