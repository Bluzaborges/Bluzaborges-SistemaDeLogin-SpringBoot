package com.omega.sports.login;

import com.omega.sports.appuser.AppUser;
import com.omega.sports.appuser.AppUserRepository;
import com.omega.sports.appuser.AppUserService;
import com.omega.sports.security.PasswordEncoder;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/login")
@AllArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @PostMapping
    public UserDetails login(@RequestBody LoginRequest request){
        return loginService.login(request);

        /*if (appUserRepository.findByEmail(request.getEmail()).isEmpty()){
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

        return user.orElseThrow();*/
    }

}
