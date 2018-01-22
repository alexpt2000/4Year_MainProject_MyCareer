package com.mycareer.api.security;

import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mycareer.api.model.Users;
import com.mycareer.api.repository.UserRepository;


@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<Users> usuarioOptional = userRepository.findByUserEmail(email);
		Users user = usuarioOptional.orElseThrow(() -> new UsernameNotFoundException("Incorrect username or password"));
		return new UserSystem(user, getPermission(user));
	}

	private Collection<? extends GrantedAuthority> getPermission(Users user) {
		Set<SimpleGrantedAuthority> authorities = new HashSet<>();
		user.getPermission().forEach(p -> authorities.add(new SimpleGrantedAuthority(p.getPermissionDescription().toUpperCase())));
		return authorities;
	}

}
