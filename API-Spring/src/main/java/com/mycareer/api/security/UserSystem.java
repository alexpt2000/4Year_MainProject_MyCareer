package com.mycareer.api.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import com.mycareer.api.model.Users;

/**
 * The Class UserSystem.
 * 
 * @author Alexander Souza
 */

public class UserSystem extends User {

	private static final long serialVersionUID = 1L;

	private Users user;

	/**
	 * Instantiates a new user system.
	 *
	 * @param user the user
	 * @param authorities the authorities
	 */
	public UserSystem(Users user, Collection<? extends GrantedAuthority> authorities) {
		super(user.getEmail(), user.getPassword(), authorities);
		this.user = user;
	}

	/**
	 * Gets the user.
	 *
	 * @return the user
	 */
	public Users getUser() {
		return user;
	}

}