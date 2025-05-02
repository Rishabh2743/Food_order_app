package com.foodapi.foodapi.service;

import com.foodapi.foodapi.model.User;
import com.foodapi.foodapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Encoding the password
        user.setEmail(user.getEmail());  // Corrected method name to set the email
        return userRepository.save(user); // Saving the user to the database
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public boolean validateUser(String email, String rawPassword) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        return optionalUser.isPresent() &&
               passwordEncoder.matches(rawPassword, optionalUser.get().getPassword());
    }

    public User findByUsername(String username) {
        // This will return null if no user is found
        return userRepository.findByUsername(username).orElse(null);
    }
;

    public boolean authenticate(String username, String password) {
        Optional<User> optionalUser = userRepository.findByUsername(username);
        User user = optionalUser.orElse(null);

        if (user != null) {
            return passwordEncoder.matches(password, user.getPassword());  // Check if passwords match
        }
        return false;
    }
    public User saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Encoding the password
        user.setEmail(user.getEmail());  // Corrected method name to set the email
        user.setAccess(1);
        return userRepository.save(user); // Saving the user to the database
    }
}
