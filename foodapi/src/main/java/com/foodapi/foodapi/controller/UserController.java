package com.foodapi.foodapi.controller;

import com.foodapi.foodapi.model.User;
import com.foodapi.foodapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Operation(
        summary = "Register a new user",
        description = "This operation registers a new user in the system",
        responses = {
            @ApiResponse(responseCode = "200", description = "User registered successfully!"),
            @ApiResponse(responseCode = "400", description = "Username already exists!")
        }
    )

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        if (userService.findByUsername(user.getUsername()) != null) {
            return ResponseEntity.status(400).body("Username already exists!");
        }

        userService.saveUser(user); // Assuming you have logic to save the user
        return ResponseEntity.ok("User registered successfully!");
    }

    @Operation(
        summary = "Check if a user exists",
        description = "Checks if a user exists in the system by username",
        responses = {
            @ApiResponse(responseCode = "200", description = "User exists!"),
            @ApiResponse(responseCode = "404", description = "User not found!")
        }
    )
    @GetMapping("/exists/{username}")
    public ResponseEntity<String> checkIfUserExists(@PathVariable String username) {
        if (userService.findByUsername(username) != null) {
            return ResponseEntity.ok("User exists!");
        } else {
            return ResponseEntity.status(404).body("User not found!");
        }
    }

    @Operation(
        summary = "Login a user",
        description = "Authenticates the user based on the username and password",
        responses = {
            @ApiResponse(responseCode = "200", description = "Login successful!"),
            @ApiResponse(responseCode = "400", description = "Invalid username or password!")
        }
    )
    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        boolean authenticated = userService.authenticate(username, password);
        System.err.println("hintinh");

        if (authenticated) {
            return "Login successful!";
        } else {
            return "Invalid username or password!";
        }
    }
}
