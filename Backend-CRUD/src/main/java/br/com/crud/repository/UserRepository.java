package br.com.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.crud.user.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
