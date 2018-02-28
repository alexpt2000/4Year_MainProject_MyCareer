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


/**
 * The Class AppUserDetailsService.
 * 
 * @author Alexander Souza
 */

@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	/* (non-Javadoc)
	 * @see org.springframework.security.core.userdetails.UserDetailsService#loadUserByUsername(java.lang.String)
	 */
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<Users> userOptional = userRepository.findByEmail(email);
		Users user = userOptional.orElseThrow(() -> new UsernameNotFoundException("Incorrect username or password"));
		return new UserSystem(user, getPermission(user));
	}

	private Collection<? extends GrantedAuthority> getPermission(Users user) {
		Set<SimpleGrantedAuthority> authorities = new HashSet<>();
		user.getPermission().forEach(p -> authorities.add(new SimpleGrantedAuthority(p.getDescription().toUpperCase())));
		return authorities;
	}

}
